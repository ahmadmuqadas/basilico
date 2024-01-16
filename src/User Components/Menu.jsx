import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "./FirebaseConfig";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
  padding-top: 8rem;
  width: 95%;
  margin: auto;
`;

const MenuTitle = styled.p`
  padding: 1.5rem 0;
  font-size: ${({ header }) => (header ? "3rem" : "1rem")};
  font-weight: ${({ header }) => (header ? "bold" : "600")};
`;

const MenuCatagoryUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;
`;

const MenuCatagoryLi = styled.li`
  font-weight: bold;
  cursor: pointer;
`;

const FoodsDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
`;

const FoodDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  min-width: 49%;
  max-width: 49%;
  /* border: solid black; */
  padding: 1rem;

`;

const FoodName = styled.p`
  grid-column: 1/2;
  grid-row: 1/1;
padding: 1rem 0;
`;

const FoodPrice = styled.p`
  grid-column: 2/4;
  grid-row: 1/1;
  text-align: end;
  padding: 1rem 0;
`;

const FoodDescription = styled.p`
  grid-column: 1/4;
  grid-row: 2/2;
`;

const Menu = () => {
  const [menuData, setMenuData] = useState();
  const [callFoodCategory, setcallFoodCategory] = useState();

  // Sad path should be applied here!
  useEffect(() => {
    const menuRef = ref(db);
    function handleSnapshot(snapshot) {
      const data = snapshot.val();
      setMenuData(data);
    }

    const menuListener = onValue(menuRef, handleSnapshot);

    return () => {
      menuListener();
    };
  }, []); 

  const renderMenuCatagory =
    menuData &&
    menuData.map((data) => {
      return (
        <MenuCatagoryLi
          key={data.FoodCatagoryId}
          onClick={() => setcallFoodCategory(data.FoodsItem)}
        >
          {data.FoodCatagoryName}
        </MenuCatagoryLi>
      );
    });


  const RenderFood =
    callFoodCategory &&
    callFoodCategory.map((foodDetail) => {
      return (
        <FoodDetails key={foodDetail.foodId}>
          <FoodName>{foodDetail.name}</FoodName>
          <FoodPrice>${foodDetail.price}</FoodPrice>
          <FoodDescription>{foodDetail.description}</FoodDescription>
        </FoodDetails>
      );
    });

  return (
    <MenuWrapper>
      <MenuTitle subheader={true}>04.WHAT'S ON THE TABLE</MenuTitle>
      <MenuTitle header={true}>The Menu</MenuTitle>
      <MenuCatagoryUl>{renderMenuCatagory}</MenuCatagoryUl>

      <FoodsDiv>{RenderFood}</FoodsDiv>
    </MenuWrapper>
  );
};

export default Menu;
