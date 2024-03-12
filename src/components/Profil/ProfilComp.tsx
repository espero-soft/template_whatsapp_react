/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 21:14:13
*/
import React, { FC, useEffect, useRef, useState } from 'react';
import './ProfilComp.css';
import ProfilDetailsItem from '../ProfilDetailsItem/ProfilDetailsItem';
import { getDatasById, updateData, updateDataWithFile } from '../../api/api-entity';
import { convertFileToUrl } from '../../helpers/fileHelpers';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/selectors/selectors';
import { User } from '../../models/User';


interface ProfilCompProps {

}


const ProfilComp: FC<ProfilCompProps> = () => {

  const currentUser = useSelector(getCurrentUser)
  const fileInput = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { userId } = useParams()



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const userData = await getDatasById("user", userId!)
      console.log({ userData });
      if (userData.isSuccess) {
        console.log({profile: userData.result.profile})
        setUser(userData.result)
      }
    }
    runLocalData()
  }, [userId])

  const handleSave = (name: string, value: string) => {
    console.log({ name, value });
    let profile 
    if(name.search('user') === -1){
      profile = { [name]: value }
    }else{
      name = name.split('user.')[1]
      profile = { user: {[name]: value} }
    }
    updateData('profile', user?.profile?._id!, { profile })

  }

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log({ selectedImage });
      setSelectedImage(selectedFile);
      let imageUrl = await convertFileToUrl(selectedFile)
      setImagePreview(imageUrl);

      const formData = new FormData()
      formData.append('picture', selectedFile)
      formData.append('profile', JSON.stringify({  business_name: user?.profile?.business_name  }))

      updateDataWithFile('profile', user?.profile?._id!, formData)
    }
  };

  const triggerFileInput = () => {
    fileInput.current?.click();
  };

  return (
    <div className="ProfilContent page-content">
      <div className="profil-cover p-3">
        <div className="profil-picture d-flex justify-content-center ">
          <div className="position-relative">

            <img src={imagePreview || user?.profile?.picture || '/avatar/empty.png'}
              width={100}
              height={100}
              className='rounded-circle' alt="" />

            {
              currentUser._id === user?._id &&
                <>
                  <input
                    ref={fileInput}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />

                  <div onClick={triggerFileInput} className="bg-primary  rounded-circle position-absolute upload-picture bottom-0">
                    <div className="icon d-flex p-1 ">
                      <i className="fa-solid fa-camera"></i>
                    </div>
                  </div>
                </>
               
            }

          </div>
        </div>
      </div>

      {
        user &&
        <div className="profil-details p-2">
          <ProfilDetailsItem
            icon="user"
            value={user?.fullname}
            handleSave={(value: string) => handleSave("user.fullname", value)}
            noEdit={currentUser._id !== user?._id}
          />
          <ProfilDetailsItem
            icon="message"
            value={user?.email}
            handleSave={(value: string) => handleSave("user.email", value)}
            noEdit={currentUser._id !== user?._id}
          />
          <ProfilDetailsItem
            icon="circle-info"
            value={user?.profile?.description}
            handleSave={(value: string) => handleSave("description", value)}
            noEdit={currentUser._id !== user?._id}
          />
          <ProfilDetailsItem
            icon="phone"
            value={user?.phone || '+33'}
            handleSave={(value: string) => handleSave("user.phone", value)}
            noEdit={currentUser._id !== user?._id}
          />
        </div>
      }
    </div>
  );
}

export default ProfilComp;