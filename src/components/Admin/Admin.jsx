import React, { useEffect, useState } from "react";
import css from "./admin.module.css";
import { useDispatch } from "react-redux";

const Admin = () => {
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState([]);
  const [usluga, setUsluga] = useState("");
  const [obUsluge, setObUsluge] = useState("");
  const [classUslugi, setClassUslugi] = useState("");

  const dispatch = useDispatch();

  const changeUsluga = (e) => {
    setUsluga(e.target.value);
  };
  const changeObUsluge = (e) => {
    setObUsluge(e.target.value);
  };
  const changeClass = (e) => {
    setClassUslugi(e.target.value);
  };

  const handleAdd = () => {
    setPhoto("");
    setUsluga("");
    setObUsluge("");
    setClassUslugi("");
  };

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [dispatch, photo]);

  return (
    <div>
      <div className={css.creatyImage}>
        <div>
          <input
            type="file"
            id="upload"
            multiple
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setPhoto(file);
              } else {
                setPhoto(null);
              }
            }}
          />
          {preview ? (
            <>
              <div className={css.divImg}>
                <img className={css.img2} src={preview} alt="" />
              </div>
              <label htmlFor="upload">
                <ion-icon name="create-outline"></ion-icon>
              </label>{" "}
            </>
          ) : (
            <label htmlFor="upload">
              <div className={css.addDiv}>
                <img
                  className={css.img1}
                  src="https://www.babypillowth.com/images/templates/upload.png"
                  alt=""
                />
                <div className={css.add}>Выбрать файл</div>
              </div>
            </label>
          )}
        </div>
      </div>
      <div>
        <div>Название услуги </div>
        <input value={usluga} onChange={changeUsluga} type="text" />
      </div>
      <div>
        <div>Об услуге</div>
        <input value={obUsluge} onChange={changeObUsluge} type="text" />
      </div>
      <div>
        <div>Какая услуга</div>
        <input value={classUslugi} onChange={changeClass} type="text" />
      </div>
      <button onClick={handleAdd}>Отправить</button>
    </div>
  );
};

export default Admin;
