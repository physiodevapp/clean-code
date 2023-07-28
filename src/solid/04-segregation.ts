interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void
}

interface RunningBird {
  run(): void
}

interface SwimmingBird {
  swim(): void
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Huminbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements Bird, SwimmingBird {
  public eat() {}
  public run() {}
  public swim() {}
}
