type Options = "option1" | "option2";

declare namespace NodeJS {
  interface ProcessEnv extends Readonly<{ [option in Options]: string }> {}
}
