import 'package:byte_bank/models/transferencia.dart';
import 'package:byte_bank/screens/transferencia/formulario.dart';
import 'package:byte_bank/screens/transferencia/item.dart';
import 'package:flutter/material.dart';

const _tituloAppBar = 'Transferências';

class ListaTransferenciasState extends State<ListaTransferencias> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(_tituloAppBar),
      ),
      body: ListView.builder(
        itemCount: widget._transferencias.length,
        itemBuilder: (BuildContext context, int index) {
          final transferencia = widget._transferencias[index];
          return ItemTransferencia(transferencia: transferencia);
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () {
          // final Future<Transferencia> future = Navigator.push<Transferencia>
          // Future.delayed(duration: Duration(seconds: 5), () {})
          Navigator.push<Transferencia>(
            context,
            MaterialPageRoute(builder: (context) {
              return const FormularioTransferencia();
            }),
          ).then((transferenciaRecebida) =>
              _adicionaNovaTransferencia(transferenciaRecebida));
        },
      ),
    );
  }

  void _adicionaNovaTransferencia(Transferencia? transferencia) {
    if (transferencia != null) {
      setState(() => widget._transferencias.add(transferencia));
    }
  }
}

class ListaTransferencias extends StatefulWidget {
  final List<Transferencia> _transferencias = [];

  ListaTransferencias({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() {
    return ListaTransferenciasState();
  }
}
