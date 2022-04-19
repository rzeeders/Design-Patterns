# Design patterns

Dit is een kleine applicatie om te experimenteren met de volgende design patterns:

 - Abstract Factory pattern
 - Strategy pattern

Nou heeft javascript (zover ik weet) niet het concept 'interfaces', dus moeten we de interfaces erbij
denken.

De interface voor de Abstract Factory zou zijn:

```Csharp
interface IMoverFactory {

    // Returns a mover at the given position.
    IMover createMover(Vector pos);
}
```

De interface van de strategy zou zijn:

```Csharp
interface IMoveStrategy {

    // Returns the next position based on the current position.
    Vector getNextPosition(Vector currentPos);
}
```

# Opdrachten

Refactor de applicatie door de Abstract Factory pattern en de Strategy Pattern toe te passen. Vind meer info in de bestanden `move-strategies.js` en `mover-factory.js`.