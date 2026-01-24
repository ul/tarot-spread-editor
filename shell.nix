with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    leiningen
    zprint
  ];
}
