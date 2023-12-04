'use client';
import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import {
  TouchTransition,
  MouseTransition,
  DndProvider,
} from 'react-dnd-multi-backend';

const CustomHTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
      // by default, will dispatch a duplicate `mousedown` event when this backend is activated
    },
    {
      id: 'touch',
      backend: TouchBackend,
      // Note that you can call your backends with options
      options: { enableMouseEvents: true, delayTouchStart: 0 },
      transition: TouchTransition,
    },
  ],
};
const Provider = ({ children }: { children: React.ReactNode }) => {
  return <DndProvider options={CustomHTML5toTouch}>{children}</DndProvider>;
};

export default Provider;
