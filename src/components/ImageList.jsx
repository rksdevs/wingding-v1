import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Upload from "./upload/Upload";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ImageOptions from "./ImageOptions";
import useMediaQuery from "@mui/material/useMediaQuery";
import useFirestore from "../firebase/useFirestore";
import { useAuth } from "../context/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const closeIconStyle = {
  position: "absolute",
  top: "0.5%",
  right: "40px",
  cursor: "pointer",
  fontSize: "1.5em",
};

const arrowForwardStyle = {
  position: "absolute",
  top: "50%",
  right: "0%",
  cursor: "pointer",
  fontSize: "2em",
};

const arrowBackwardStyle = {
  position: "absolute",
  top: "50%",
  left: "0%",
  cursor: "pointer",
  fontSize: "2em",
};

export default function TitlebarImageList() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [open, setOpen] = React.useState(false);
  const { documents } = useFirestore("gallery");
  const { currentUser } = useAuth();

  const handleClose = () => setOpen(false);
  const handleImageClose = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  useEffect(() => {
    setOpen(true);
  }, [clickedImg]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    // console.log(item);
    setClickedImg(item.data.imageURL);
  };

  const handelRotationRight = () => {
    const totalLength = documents.length;
    // console.log(documents[0].data.imageURL);
    // console.log(documents);
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = documents[0].data.imageURL;
      setClickedImg(newUrl);
      // console.log(documents.data[0].imageURL);
      return;
    }
    const newIndex = currentIndex + 1;
    // console.log(documents);
    // const newUrl = documents.filter((item) => {
    //   return documents.indexOf(item) === newIndex;
    // });
    const newImgItem = documents.filter((item) => {
      return documents.indexOf(item) === newIndex;
    });
    // console.log(newImgItem[0]);
    const newItem = newImgItem[0].data.imageURL;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = documents.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = documents[totalLength - 1].data.imageURL;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = documents.filter((item) => {
      return documents.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].data.imageURL;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const matches = useMediaQuery("(min-width:600px)");

  return currentUser ? (
    <>
      <Upload />
      <ImageList
        sx={
          matches
            ? { width: "75%", overflowY: "inherit" }
            : {
                width: "75%",
                overflowY: "inherit",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(280px, 1fr))!important",
              }
        }
      >
        {documents.map((item, index) => (
          <ImageListItem key={item?.id}>
            <ImageOptions
              imageId={item?.id}
              uid={item?.data?.uid}
              imageURL={item?.data?.imageURL}
            />
            <img
              src={`${item?.data.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item?.data.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="img"
              loading="lazy"
              onClick={() => handleClick(item, index)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        {clickedImg && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="overlay dismiss" onClick={handleImageClose}>
                <img src={clickedImg} alt="bigger pic" />
                <span
                  className="dismiss"
                  onClick={handleImageClose}
                  style={closeIconStyle}
                >
                  X
                </span>

                <ArrowBackIcon
                  style={arrowBackwardStyle}
                  onClick={handelRotationLeft}
                />
                <ArrowForwardIcon
                  style={arrowForwardStyle}
                  onClick={handelRotationRight}
                />
              </div>
            </Box>
          </Modal>
        )}
      </div>
    </>
  ) : (
    <>
      <ImageList
        sx={
          matches
            ? { width: "75%", overflowY: "inherit" }
            : {
                width: "75%",
                overflowY: "inherit",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(280px, 1fr))!important",
              }
        }
      >
        {documents.map((item, index) => (
          <ImageListItem key={item?.id}>
            <ImageOptions
              imageId={item?.id}
              uid={item?.data?.uid}
              imageURL={item?.data?.imageURL}
            />
            <img
              src={`${item?.data.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item?.data.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="img"
              loading="lazy"
              onClick={() => handleClick(item, index)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div>
        {clickedImg && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="overlay dismiss" onClick={handleImageClose}>
                <img src={clickedImg} alt="bigger pic" />
                <span
                  className="dismiss"
                  onClick={handleImageClose}
                  style={closeIconStyle}
                >
                  X
                </span>

                <ArrowBackIcon
                  style={arrowBackwardStyle}
                  onClick={handelRotationLeft}
                />
                <ArrowForwardIcon
                  style={arrowForwardStyle}
                  onClick={handelRotationRight}
                />
              </div>
            </Box>
          </Modal>
        )}
      </div>
    </>
  );
}
