export type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface FontConfig {
  weight: FontWeight[];
  style?: ("normal" | "italic")[];
  subsets?: ("latin" | "latin-ext")[];
  display: "auto" | "block" | "fallback" | "optional" | "swap" | undefined;
}
