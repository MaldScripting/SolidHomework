
1. S — Single Responsibility Principle (SRP)
Cada clase debe tener una única razón para cambiar.

FileOrderSaver solo guarda órdenes.

EmailNotifier y SMSNotifier solo notifican.

OrderProcessor solo coordina el proceso.

 Cada clase tiene una responsabilidad única.

2. O — Open/Closed Principle (OCP)
Las clases deben estar abiertas a extensión, pero cerradas a modificación.

Puedes crear nuevas clases como DatabaseOrderSaver o PushNotifier sin modificar el código original.

 Se puede extender la funcionalidad sin cambiar el código existente.

3. L — Liskov Substitution Principle (LSP)
Las clases hijas deben poder sustituir a sus clases padres sin errores.

FileOrderSaver hereda de OrderSaver

EmailNotifier y SMSNotifier heredan de Notifier

Ambas pueden sustituirse sin romper OrderProcessor

 Todas las subclases pueden reemplazar a su clase base sin problemas.

4. I — Interface Segregation Principle (ISP)
No forzar a una clase a depender de métodos que no usa.

OrderSaver tiene solo save()

Notifier tiene solo send()

 Las interfaces están bien separadas y específicas.

5. D — Dependency Inversion Principle (DIP)
Depender de abstracciones, no de implementaciones concretas.

OrderProcessor depende de las interfaces (OrderSaver, Notifier), no directamente de FileOrderSaver ni EmailNotifier.

 La lógica está desacoplada de las implementaciones concretas.

 