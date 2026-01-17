import styled from "styled-components"
import { colors } from "../../config/colors";
import {
  Cancel,
} from "@mui/icons-material";

const UploadDisplayImages = ({images, handleRemoveImage, isHideRemoveImage

}) => {
    return (
        <DisplayImages>
                            {images?.map((props, i) => (
                              <ImgAndIcon key={i}>
                                <Image src={props?.preview? props?.preview : props} />
                                {
                                    isHideRemoveImage? null : 
                                <Icon
                                  onClick={() => {
                                    handleRemoveImage(i);
                                  }}
                                >
                                  <Cancel />
                                </Icon>
                                }
                              </ImgAndIcon>
                            ))}
                          </DisplayImages>
    )
}

export default UploadDisplayImages


const Icon = styled.div`
  position: absolute;
  top: 5px;
  right: 3px;
  color: red;
  font-size: 10px;
  cursor: pointer;
`;
const ImgAndIcon = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;


const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid ${colors.primary};
`;

const DisplayImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;
