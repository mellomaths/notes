class Contact {
  final String name;
  final int accountNumber;

  const Contact({required this.name, required this.accountNumber});

  @override
  String toString() {
    return 'Contact{name: $name, accountNumber: $accountNumber}';
  }
}
