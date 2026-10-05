with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    nodejs_24
    jdk21
    zprint
  ];
}
