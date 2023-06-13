declare module "*.png" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.svg" {
  const content: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

  export default content;
}

declare module "*.jpg" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.jpeg" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.gif" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.webp" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.avif" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.ico" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}

declare module "*.bmp" {
  const content: import("../dist/client/image").StaticImageData;

  export default content;
}
