import React, { useState } from 'react';
// Assicurati di importare le icone che desideri utilizzare
// Ad esempio, se stai utilizzando Heroicons, potresti fare qualcosa del genere:
// import { CheckIcon, XIcon } from '@heroicons/react/outline';

const Checkbox = ({ state, setState, SelectedIcon, NoSelectedIcon }) => {
  return (
    <>
      {state ? (
        // Inserisci qui la tua icona per lo stato "checked"
        <div className="p-1 text-amber-500  hover:text-amber-900 hover:bg-gray-300 hover:text-gray-800 rounded-full rounded-full cursor-pointer mx-1" onClick={() => setState(false)}>
          {SelectedIcon}
        </div>

      ) : (
        // Inserisci qui la tua icona per lo stato "unchecked"
        <div className="p-1 text-zinc-500 hover:text-gray-800 hover:bg-gray-300 hover:text-gray-800 rounded-full rounded-full cursor-pointer mx-1" onClick={() => setState(true)}>
          {NoSelectedIcon}
        </div>
      )}
    </>
  )
};

export default Checkbox;