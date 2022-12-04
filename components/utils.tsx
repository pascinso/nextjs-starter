import { lazy, Suspense } from "react";
import type { ComponentType, ImportedComponent, Properties } from "./types";

export default function load<Props extends object>(
  importedComponent: Promise<ImportedComponent<Props>>,
  props?: Props
) {
  const Component = lazy(() => importedComponent);

  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
}

export function defineProperties<ObjectType extends object>(
  obj: ObjectType,
  properties: Properties<ObjectType>
) {
  Object.defineProperties(obj, properties);
}

export function getError<Component extends ComponentType>(
  component: Component,
  property: keyof Component
) {
  return new Error(
    `${component.name.substring(
      3
    )} should be rendered to access '${property.toString()}' property`
  );
}

export function throwError<Component extends ComponentType>(
  component: Component,
  property: keyof Component
) {
  return function error() {
    throw getError(component, property);
  };
}
