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
            VOLUME TOTAL DE FACTURE <br></br> <b>0</b>XAF
          </div>
        </div>

        <div className="volume-content">
          <div className="left-side"></div>
          <div className="right-side">
            {" "}
            VOLUME TOTAL DE FACTURE <br></br> <b>0</b>XAF
          </div>
        </div>
        <div className="volume-content">
          <div className="left-side"></div>
          <div className="right-side">
            {" "}
            VOLUME TOTAL DE FACTURE <br></br> <b>0</b>XAF
          </div>
        </div>
      </div>
      <div className="closing"><MinusOutlined style={{ fontSize: '14px', color: '#000' }} />&nbsp; &nbsp;<CloseOutlined style={{ fontSize: '14px', color: '#000', marginRight:'2%' }} /></div>
      
      
      <div className="content">
     
        
      
        <div className="left">
          
          
        <MenuOutlined className="menu" style={{ fontSize: '14px', color: '#000' }} />
          <h1 className = "left-head">VOLUME DE PAIEMENTS &nbsp; &nbsp;  
      </h1> 
          <div className="wrapper">
            <div className="timeline-area">
              <div className="line-area"></div>
              <div className="single-item active">
                <span></span>
                <div className="image-area">
                  {" "}
                  <span></span>
                </div>
              </div>
              <div className="single-item active">
                <span></span>
                <div className="image-area">
                  {" "}
                  <span></span>
                </div>
              </div>
              <div className="single-item active">
                <span></span>
                <div className="image-area">
                  {" "}
                  <span></span>
                </div>
              </div>
              <div className="single-item active">
                <span></span>
                <div className="image-area">
                  {" "}
                  <span></span>
                </div>
              </div>

              <div className="single-item active">
                <span></span>
                <div className="image-area">
                  {" "}
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {/* <Steps
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  /> */}
        </div>

        <div className="right">

            <div className="right-top">
          <div className="right-close"> <PlusOutlined style={{ fontSize: '14px', color: '#000', marginRight:'2%' }}/>  <CloseOutlined style={{ fontSize: '14px', color: '#000', marginRight:'2%' }} /> </div>
         <h3>TOP 5 CLIENTS</h3> 

               
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

            <div className="right-close-bottom">  <MinusOutlined style={{ fontSize: '14px', color: '#000', marginRight:'2%' }}/> <CloseOutlined style={{ fontSize: '14px', color: '#000', marginRight:'2%' }} /> </div><br></br>
            <div className="moyens">
            <MenuOutlined className="menu-bottom" style={{ fontSize: '14px', color: '#000', marginRight:'2%' }} />
                <h3 className="moyens-head">MOYENS DE PAIEMENTS   </h3> 


            </div>
        </div>

      </div>
        

    </div>
  );
};
export default Billers;
