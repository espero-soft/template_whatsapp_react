/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/03/2024 08:02:25
*/
import React, { FC, useEffect, useRef, useState } from 'react';
import './ProfilDetailsItem.css';

interface ProfilDetailsItemProps {
  icon: string;
  value: any;
  handleSave: (value: string) => void;
  noEdit?: boolean
}

const ProfilDetailsItem: FC<ProfilDetailsItemProps> = ({ icon, value, handleSave, noEdit }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Your async logic here if needed
    };
    runLocalData();
  }, []); // Empty dependency array for componentDidMount-like behavior

  const handleSaveData = () => {
    setIsEditing(false);
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setNewValue(inputValue)
      handleSave(inputValue);
    }
  };

  return (
    <div className="ProfilDetailsItem">
      <div className="profil-details-item p-1 d-flex align-items-center gap-2">
        <div className="icon">
          <i className={`fa fa-${icon}`}></i>
        </div>
        <div className="name flex-grow-1" onDoubleClick={() => setIsEditing(true)}>
          <div className="profil-value" >
            {!isEditing ? (
              newValue
            ) : (
              <input ref={inputRef} type="text" defaultValue={newValue} />
            )}
          </div>
        </div>
        {
          !noEdit &&
          <div>
            {!isEditing ? (
              <div className="icon" onClick={() => setIsEditing(true)}>
                <i className="fa fa-pencil"></i>
              </div>
            ) : (
              <div className="icon" onClick={handleSaveData}>
                <i className="fa fa-check"></i>
              </div>
            )}

          </div>
        }
      </div>
    </div>
  );
};

export default ProfilDetailsItem;
