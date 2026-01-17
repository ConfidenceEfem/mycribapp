import styled from "styled-components"
import CircularProgressComp from "../../components/form/CircularProgressComp";
import InputField from "../../components/form/InputField";
import Button from "../../components/Button";
import { colors } from "../../config/colors";
import ErrorMessage from "../../components/form/ErrorMessage";
import SelectCheckedTag from "../../components/form/SelectCheckedTag";

const UploadLodgeForm = ({handleSubmit, handleChange, setFieldTouched, errors,touched, isCheckWithRoomate, setIsCheckWithRoomate,isNewLodgeCreating, values}) => {
  console.log(values["qualities"], "qualities")
    return (
         <FormAndButton onSubmit={handleSubmit}>
              <FormHolder>
                <Div>
                  <ErrorMessage
                    error={errors?.title}
                    visible={touched?.title}
                  />

                  <InputField
                    placeholder={"Title"}
                    onChange={handleChange("title")}
                    onBlur={() => {
                      setFieldTouched("title");
                    }}
                    name="title"
                    value={values?.title}
                    
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.price}
                    visible={touched?.price}
                  />
                  <InputField
                    placeholder={"Price"}
                    type={"Number"}
                    onChange={handleChange("price")}
                    name="price"
                    onBlur={() => {
                      setFieldTouched("price");
                    }}
                    value={values?.price}
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.location}
                    visible={touched?.location}
                  />
                  <InputField
                    placeholder={"Location(eg. UpSchool/Aguawka/Amansea)"}
                    onChange={handleChange("location")}
                    onBlur={() => {
                      setFieldTouched("location");
                    }}
                    value={values?.location}
                  />
                </Div>
                <Div>
                  <Label>
                    <input
                      type="checkbox"
                      checked={isCheckWithRoomate}
                      onClick={() => {
                        setIsCheckWithRoomate(!isCheckWithRoomate);
                      }}
                      value={values?.withRoomate}
                    />
                    With Roomates?
                  </Label>
                  <InputField
                    placeholder={"How many roomates"}
                    type={"Number"}
                    disabled={!values?.withRoomate}
                  />
                </Div>
                <Div>
                  <ErrorMessage
                    error={errors?.typeOfLodge}
                    visible={touched?.typeOfLodge}
                  />
                  <InputField
                    placeholder={"Type of Lodge(eg. 1 Room self Contain)"}
                    onChange={handleChange("typeOfLodge")}
                    onBlur={() => {
                      setFieldTouched("typeOfLodge");
                    }}
                    value={values?.typeOfLodge}
                  />
                </Div>
                <Div>
                  <Label>
                    Qualities of the Lodge?
                    <ErrorMessage
                      error={errors?.qualities}
                      visible={touched?.qualities}
                    />
                  </Label>
                    <SelectCheckedTag 
                    // handleChange={handleChange}
                    
                    />
                  {/* <InputField
                    placeholder={"24hr Electricity/Security e.t.c"}
                    onChange={handleChange("qualities")}
                    onBlur={() => {
                      setFieldTouched("qualities");
                    }}
                  /> */}
                </Div>
                <TextArea
                  placeholder={"Description"}
                  style={{ flex: "1" }}
                  type="message"
                onChange={handleChange("description")}
                value={values?.description}
                />
              </FormHolder>
              <Button
                text={
                  isNewLodgeCreating ? (
                    <CircularProgressComp/>
                  ) : (
                    "Update Lodge"
                  )
                }
                type="submit"
              />
            </FormAndButton>
    )
}

export default UploadLodgeForm


const FormAndButton = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;



const TextArea = styled.textarea`
  grid-column: span 2;
  width: 98%;
  height: 60px;
  resize: none;
  padding: 5px;
  font-family: "montserrat";
  border: none;
  outline: 1px solid ${colors.primary};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-end;
`;

const FormHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 650px;
  column-gap: 25px;
  row-gap: 25px;
    @media screen and (max-width: 1000px) {
    width: 520px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;


const Label = styled.div`
  font-size: 14px;
  font-family: "montserrat";
  display: flex;
  flex-wrap: nowrap;
  div {
    display: flex;
    flex-wrap: nowrap;
  }
 
  @media screen and (max-width: 400px) {
   font-size: 11px;
   text-align: center;
   
  }
`;


