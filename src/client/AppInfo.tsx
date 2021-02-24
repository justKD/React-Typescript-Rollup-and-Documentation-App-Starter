/**
 * @file /src/client/AppInfo.tsx
 * @author Cadence Holmes
 * @copyright Cadence Holmes 2020
 * @fileoverview
 * This is where specifics for your documentation app will go.
 */

import * as React from 'react';

import { FirstExample } from './FirstExample';
import { SecondExample } from './SecondExample';
import { ThirdExample } from './ThirdExample';

/**
 * The width of the responsive drawer in pixels.
 */
export const drawerWidth = 180;

/**
 * This holds the title and opening examples.
 * `codeExample` and `moreExamples` are optional.
 */
export const headerText = {
  title: 'Title Text',
  codeExample: ` 
    const example = new Code();
    example.do();
    `,
  moreExamples: `
    /**
     * Example Description
     */
    
    const example = new Code();
    example.dont();



    /**
     * Another Example
     */

    example.doMore();
    `,
};

/**
 * Build the description content here. Paragraphs should be in separate
 * div elements. Code can be styled with `<Code>` tags, and links should
 * be added as `<a>` elements. Return an array of paragraphs.
 */
export const headerDescription = () => {
  const linkNodes = {
    kdhome: <a href={`http://justkd.io`}>kd home</a>,
  };

  const p1 = <div>Here is the opening description.</div>;
  const p2 = (
    <div>
      <code>Code</code> can be styled.
    </div>
  );
  const p3 = <div>And you can add links like this: {linkNodes.kdhome}.</div>;

  return [p1, p2, p3];
};

/**
 * - For each example component, entries can be given an arbitrary
 * title, but the `href` property should match an `id` passed to
 * the `_ExampleHoc` prop `id`. Each entry must have a `component`.
 *
 * - Each category should be in its own array, even if there is only
 * one example. Each category will be separated by a divider.
 *
 * - Return an array of category arrays.
 */
export const exampleLists = () => {
  const examples = [
    {
      title: 'Example 1',
      href: '#example-1',
      component: <FirstExample />,
    },
    {
      title: 'Example 2',
      href: '#example-2',
      component: <SecondExample />,
    },
    {
      title: 'Example 3',
      href: '#example-3',
      component: <ThirdExample />,
    },
  ];

  const category1 = [examples[0], examples[1]];
  const category2 = [examples[2]];

  return [category1, category2];
};
