import React from "react";
import { useSelector } from "react-redux";
import { SecondaryGreyContainer } from "../HomePage/HomeStyle";
import newArivalList from "../../StaticData/Dynamic/newArivalList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const NewArivals = () => {
    const { dataListLoading, dataListFour } = useSelector(
        (state) => state.dataList,
    );

    return (
        <SecondaryGreyContainer>
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                }}
            >
                NEW ARRIVALS
            </p>
            <div>
                {dataListLoading
                    ? newArivalList.map((data, i) => (
                          <CustomCard key={i} type="secondary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : newArivalList.map((item, index) => (
                          <CustomCard key={index} type="secondary">
                              <img
                                  style={{
                                      width: "100%",
                                  }}
                                  src={item.image_url}
                                  alt="ProductImage"
                              />
                              <div
                                  style={{
                                      fontWeight: "bold",
                                      textAlign: "center",
                                  }}
                              >
                                  {item.type}
                              </div>
                          </CustomCard>
                      ))}
            </div>
        </SecondaryGreyContainer>
    );
};
