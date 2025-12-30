# Weasel
> [!NOTE]
> This project is a forked and maintained version of [Vaul](https://github.com/emilkowalski/vaul).

> [!TIP]
> Since the current version of this package is used to publish updates and fixes from Vaul that went unreleased, you can use the [original documentation](https://vaul.emilkowal.ski/getting-started).

Weasel is an unstyled drawer component for React that can be used as a Dialog replacement on tablet and mobile devices.

## Usage

Install using npm, yarn, or pnpm:
```sh
npm install weasel
```
```sh
yarn add weasel
```
```sh
pnpm add weasel
```

Import the necessary components from the package:
```tsx
import * as Drawer from 'weasel';

function MyDrawerComponent() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <Drawer.Title>Drawer Title</Drawer.Title>
          {/* Drawer body content goes here */}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
```
