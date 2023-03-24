import { Dispatch, SetStateAction, createContext, useContext, useState,PropsWithChildren } from 'react';

import { initValue } from '../../constant/play.initvalue';
import { IPlay } from '../../constant/play.interface';
// Data value of the provider context
type PlayContextValue = {
  setPlay?: Dispatch<SetStateAction<IPlay | undefined>>
  play?: IPlay
}
// default value of the context
const defaultValue: PlayContextValue = {}

// create context
const PlayContext = createContext<PlayContextValue>(defaultValue);

// Proptypes of Provider component
type PlayContextProps = PropsWithChildren & {
  children: any
}

/**
* Provider component
 * */
const PlayProvider = (props: PlayContextProps) => {
  const [play, setPlay] = useState<IPlay>()

  console.log(play)

  return (
    <PlayContext.Provider
      value={{ play, setPlay }}
      {...props}
    />
  );
}


// Default hook to retrieve context data
const usePlayContext = () => {
  const context = useContext(PlayContext);
  if (context === undefined) {
    return {}; // also, you can throw an error if it is you need the context
  }
  return context;
}

export { PlayProvider, usePlayContext };