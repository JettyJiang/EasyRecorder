import * as React from 'react';

export type ContentComponent = {
  path: string,
  title: string,
  icon: string,
  component: React.ComponentType<void>,
  subItems: Array<ContentComponent>
};