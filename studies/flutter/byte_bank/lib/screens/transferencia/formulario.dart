import 'package:byte_bank/components/custom_text_field.dart';
import 'package:byte_bank/models/transferencia.dart';
import 'package:flutter/material.dart';

const String _tituloAppBar = 'Criando transferência';

const String _labelCampoValor = 'Valor';
const String _hintCampoValor = '0.00';

const String _labelCampoNumeroConta = 'Número da Conta';
const String _hintCampoNumeroConta = '0000';

const String _buttonTextConfirmar = 'Confirmar';

class FormularioTransferenciaState extends State<FormularioTransferencia> {
  final TextEditingController _controladorCampoNumeroConta =
      TextEditingController();
  final TextEditingController _controladorCampoValor = TextEditingController();

  void _criaTransferencia(BuildContext context) {
    final int? numeroConta = int.tryParse(_controladorCampoNumeroConta.text);
    final double? valor = double.tryParse(_controladorCampoValor.text);
    if (numeroConta != null && valor != null) {
      final transferenciaCriada =
          Transferencia(numeroConta: numeroConta, valor: valor);
      Navigator.pop<Transferencia>(context, transferenciaCriada);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text(_tituloAppBar)),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            CustomTextField(
              controller: _controladorCampoNumeroConta,
              labelText: _labelCampoNumeroConta,
              hintText: _hintCampoNumeroConta,
            ),
            CustomTextField(
              controller: _controladorCampoValor,
              labelText: _labelCampoValor,
              hintText: _hintCampoValor,
              icon: Icons.monetization_on,
            ),
            ElevatedButton(
              onPressed: () => _criaTransferencia(context),
              child: const Text(_buttonTextConfirmar),
            ),
          ],
        ),
      ),
    );
  }
}

class FormularioTransferencia extends StatefulWidget {
  const FormularioTransferencia({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return FormularioTransferenciaState();
  }
}
