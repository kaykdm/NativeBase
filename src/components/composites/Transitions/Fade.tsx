import React from 'react';
import { useThemeProps } from '../../../hooks/useThemeProps';
import PresenceTransition from '../Transitions/PresenceTransition';
import type { IFadeProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Fade = ({ children, style, ...props }: IFadeProps, ref?: any) => {
  const { in: animationState, entryDuration, exitDuration } = useThemeProps(
    'Fade',
    props
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <PresenceTransition
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: entryDuration } }}
      exit={{ opacity: 0, transition: { duration: exitDuration } }}
      style={style}
      visible={animationState}
      ref={ref}
    >
      {children}
    </PresenceTransition>
  );
};

export default React.memo(React.forwardRef(Fade));
