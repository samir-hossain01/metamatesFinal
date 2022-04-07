
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
// import { fetchData } from "./redux/data/dataActions";
import { fetchData } from '../redux/data/dataActions'

// import Announcement from "../Components/Announcement/Announcement";
import Banner from "../Components/Banner/Banner";
import Benifits from "../Components/Benifits/Benifits";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import InfiniteSlider from "../Components/InfiniteSlider/InfiniteSlider";
import Press from "../Components/Press/Press";
import Roadmap from "../Components/Roadmap/Roadmap";
import Team from "../Components/Team/Team";
import Topnav from "../Components/Topnav/Topnav";
import Welcometwo from "../Components/Welcometwo/Welcometwo";
// import Slider from "../Components/slider/Slider";
import Wrapper from "../Components/Welcome/Welcome.styled";
// import images
import MinImg from "../images/mintgif.gif"
import { Icon } from "@iconify/react";
function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log("error")
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);


  return (
    <div>
      <Topnav />


      {/* <Banner /> */}



      <Wrapper>
        <div className="card" id="welcome">
          <div className="card-body" >
            <h4>Metamates Ape Lounge</h4>

            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                {/* <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                > */}
                <p>The sale has ended.</p>
                {/* </s.TextTitle> */}
                {/* <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                > */}
                <h1>You can still find {CONFIG.NFT_NAME} on
                  {/* </s.TextDescription> */}
                  {/* <s.SpacerSmall /> */}
                  {/* <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}> */}
                  {CONFIG.MARKETPLACE} </h1>
                {/* </StyledLink> */}
              </>
            ) : (
              <>
                {/* <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                > */}
                <p>1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.</p>
                {/* </s.TextTitle> */}
                {/* <s.SpacerXSmall /> */}
                {/* <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                > */}
                {/* <p>Excluding gas fees.</p> */}
                {/* </s.TextDescription> */}
                {/* <s.SpacerSmall /> */}
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  // <s.Container ai={"center"} jc={"center"}>
                    <div className="card-body">
                    {/* <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  > */}
                    {/* <p>
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </p> */}
                    {/* </s.TextDescription> */}
                    {/* <s.SpacerSmall /> */}
                    <button
                    className="btn welcomeBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        {/* <s.SpacerSmall /> */}
                        {/* <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        > */}
                        <p>
                          {blockchain.errorMsg}
                        </p>
                        {/* </s.TextDescription> */}
                      </>
                    ) : null}
                    </div>
                
                ) : (
                  <>
                    {/* <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    > */}
                    <h1>
                      {feedback}
                    </h1>
                    {/* </s.TextDescription> */}
                    {/* <s.SpacerMedium /> */}
                    {/* <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container> */}
                    <div className="counter">
                      <button disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }} >
                        <Icon icon="akar-icons:minus" />
                      </button>

                      <div className="inputField">{mintAmount}</div>
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        <Icon icon="ant-design:plus-outlined" />
                      </button>
                    </div>
                    {/* <s.SpacerSmall /> */}
                    {/* <s.Container ai={"center"} jc={"center"} fd={"row"}> */}
                    <button
                      className="btn welcomeBtn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        getData();
                        claimNFTs();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY"}
                    </button>
                    {/* </s.Container> */}
                  </>
                )}
              </>
            )}
            {/* <div className="counter">
              <button onClick={decrementCounter}>
                <Icon icon="akar-icons:minus" />
              </button>

              <div className="inputField">{counter}</div>
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <Icon icon="ant-design:plus-outlined" />
              </button>
            </div>
            <button className="btn welcomeBtn">Mint Now</button> */}

            <div className="social-icons">
              <button>
                <Icon icon="akar-icons:twitter-fill" />
              </button>
              <button>
                <Icon icon="akar-icons:discord-fill" />
              </button>
              <button>
                <Icon icon="ant-design:instagram-filled" />
              </button>
              <button>
                <Icon icon="fa6-brands:tiktok" />
              </button>
              <button>
                <Icon icon="ant-design:youtube-filled" />
              </button>
            </div>
          </div>
          <div className="card-img">
            <img src={MinImg} alt="nft" />
          </div>
        </div>

      </Wrapper>
      <Welcometwo />
      {/* <Announcement /> */}
      <Benifits />
      {/* <Slider /> */}
      <Roadmap />
      <Team />
      <Press />

      <Faq />

      <InfiniteSlider />
      <Footer />
    </div>
  );
}
export default Home;
