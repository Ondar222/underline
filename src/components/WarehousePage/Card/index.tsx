import { IWarehouse } from "@/models/IWarehouse";
import { ClockCircleOutlined, ClockCircleTwoTone, EnvironmentOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";

const WarehouseCard = (warehouse: IWarehouse) => {
  return (
    <div className="warehouse__card">
      <div className="container__ipcard">

        <Typography.Title level={2}>{warehouse.title}</Typography.Title>
        <Space direction="vertical" size={27}>
          <div className="warehouse__card__note">
            <EnvironmentTwoTone twoToneColor="#c90000"/>
            <p>
              {warehouse.address.region.type + " "}
              {warehouse.address.region.name + ", "}
              {warehouse.address.locality.type + " "}
              {warehouse.address.locality.name + ", "}
              {warehouse.address.street.type + " "}
              {warehouse.address.street.name + ", "}
              {"дом " + warehouse.address.street.number}
            </p>
          </div>
          <div className="warehouse__card__note">
            <ClockCircleTwoTone twoToneColor="#c90000"/>
            <p>9:00 - 18:00 (сейчас работает)</p>
          </div>
          <div className="warehouse__card__note">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 2C12.8565 2 14.637 2.7375 15.9497 4.05025C17.2625 5.36301 18 7.14348 18 9C18 9.26521 18.1054 9.51957 18.2929 9.7071C18.4804 9.89464 18.7348 10 19 10C19.2652 10 19.5196 9.89464 19.7071 9.7071C19.8946 9.51957 20 9.26521 20 9C20 6.61305 19.0518 4.32386 17.364 2.63604C15.6761 0.948211 13.3869 0 11 0C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.480429 10 0.734783 10 1C10 1.26522 10.1054 1.51957 10.2929 1.70711C10.4804 1.89464 10.7348 2 11 2ZM19.75 13.91C19.695 13.7495 19.6 13.6056 19.4741 13.4919C19.3481 13.3781 19.1953 13.2983 19.03 13.26L13.03 11.89C12.8671 11.8531 12.6976 11.8575 12.5369 11.9029C12.3762 11.9483 12.2294 12.0333 12.11 12.15C11.97 12.28 11.96 12.29 11.31 13.53C9.1532 12.5362 7.42499 10.8009 6.44 8.64C7.71 8 7.72 8 7.85 7.85C7.96671 7.73055 8.05165 7.58378 8.09706 7.42308C8.14248 7.26238 8.14693 7.09286 8.11 6.93L6.74 1C6.70164 0.834696 6.62186 0.681871 6.50814 0.555911C6.39443 0.429952 6.25053 0.335002 6.09 0.28C5.85647 0.196589 5.61531 0.1363 5.37 0.0999999C5.11725 0.0413952 4.85933 0.00789934 4.6 0C3.38 0 2.20998 0.484641 1.34731 1.34731C0.484641 2.20998 0 3.38 0 4.6C0.00529192 8.68271 1.62949 12.5967 4.5164 15.4836C7.40331 18.3705 11.3173 19.9947 15.4 20C16.0041 20 16.6022 19.881 17.1603 19.6498C17.7184 19.4187 18.2255 19.0798 18.6527 18.6527C19.0798 18.2255 19.4187 17.7184 19.6498 17.1603C19.881 16.6022 20 16.0041 20 15.4C20.0003 15.1455 19.9802 14.8913 19.94 14.64C19.898 14.3916 19.8344 14.1474 19.75 13.91ZM15.4 18C11.8469 17.9973 8.44011 16.5847 5.92769 14.0723C3.41528 11.5599 2.00265 8.15309 2 4.6C2.00263 3.91125 2.27741 3.25146 2.76443 2.76443C3.25146 2.27741 3.91125 2.00263 4.6 2H4.93L6 6.64L5.46 6.92C4.6 7.37 3.92 7.73 4.28 8.51C4.86622 10.1696 5.81477 11.6777 7.05673 12.9249C8.2987 14.172 9.80288 15.1269 11.46 15.72C12.3 16.06 12.63 15.43 13.08 14.56L13.37 14.01L18 15.07V15.4C17.9974 16.0887 17.7226 16.7485 17.2356 17.2356C16.7485 17.7226 16.0887 17.9974 15.4 18Z"
                fill="#C90000"
              />
            </svg>

            <p>{warehouse.contacts.phones[0].phone}</p>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default WarehouseCard;
