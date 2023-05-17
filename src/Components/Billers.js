import react from "react";
import billers from "./css/billers.css";
import { Steps } from "antd";
import { CloseOutlined, MenuOutlined, PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";

const Billers = () => {
  return (
    <div>
      <div className="content-heading">Accueil</div>
      <div className="volume">
        <div className="volume-content">
          <div className="left-side"></div>
          <div className="right-side">
            {" "}
            VOLUME TOTAL DE FACTURE <br></br> <br></br>{" "}
            <span style={{ fontSize: "21px" }}>0</span>{" "}
            <span style={{ fontSize: "12px" }}>XAF</span>
          </div>
        </div>

        <div className="volume-content">
          <div className="left-side"></div>
          <div className="right-side">
            {" "}
            VOLUME REGLE DU MOIS <br></br> <br></br>{" "}
            <span style={{ fontSize: "21px" }}>0</span>{" "}
            <span style={{ fontSize: "12px" }}>XAF</span>
          </div>
        </div>
        <div className="volume-content">
          <div className="left-side"></div>
          <div className="right-side">
            {" "}
            VOLUME DU LA JOURNEE <br></br> <br></br>{" "}
            <span style={{ fontSize: "21px" }}>0</span>{" "}
            <span style={{ fontSize: "12px" }}>XAF</span>
          </div>
        </div>
      </div>
      <div className="billers-body">
        <div className="volume-de-paiements-head">
          <MinusOutlined style={{ fontSize: "14px", color: "#000" }} />
          &nbsp; &nbsp;
          <CloseOutlined
            style={{ fontSize: "14px", color: "#000", marginRight: "2%" }}
          />
          <div className="volume-de-paiements-body">
            {" "}
            <MenuOutlined
              style={{ fontSize: "14px", color: "#000", marginRight: "2%" }}
            />
          </div>
        </div>

        <div className="right">
          <div className="right-top">
            <div className="right-close">
              {" "}
              <PlusOutlined
                style={{ fontSize: "14px", color: "#000", marginRight: "2%" }}
              />{" "}
              <CloseOutlined
                style={{ fontSize: "14px", color: "#000", marginRight: "2%" }}
              />{" "}
            </div>
            <h3 style={{ textAlign: "center" }}>TOP 5 CLIENTS</h3>

            <table>
              <tr className="table-heading">
                <th>Nom</th>
                <th>Montant Transaction</th>
              </tr>
              <tr>
                <td>SAHADIO NGNOUPA ELVICE</td>
                <td>7550</td>
              </tr>
            </table>
          </div>
          <br></br>

          <div className="moyens-de-paiement">
            {" "}
            <MinusOutlined
              style={{ fontSize: "14px", marginRight: "2%" }}
            />{" "}
            <CloseOutlined
              style={{ fontSize: "14px", color: "#000", marginRight: "2%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Billers;
