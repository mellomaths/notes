import 'package:byte_bank_db/screens/contact_form.dart';
import 'package:flutter/material.dart';

class ContactsList extends StatelessWidget {
  const ContactsList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Contacts')),
      body: ListView(
        children: const <Widget>[
          Card(
            child: ListTile(
              title: Text(
                'Alex',
                style: TextStyle(fontSize: 24.0),
              ),
              subtitle: Text(
                '1000',
                style: TextStyle(fontSize: 16.0),
              ),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context)
              .push(
                (MaterialPageRoute(
                  builder: (context) => const ContactForm(),
                )),
              )
              .then((newContact) => debugPrint('$newContact'));
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
