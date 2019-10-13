import React from "react";
import Grid from "@material-ui/core/Grid";
import { Parallax, Background } from "react-parallax";
// import { MDBMask, MDBView } from "mdbreact";
import CodeIMG from "../../img/code.jpeg";
import PublicIcon from "@material-ui/icons/Public";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import TvIcon from "@material-ui/icons/Tv";

import "./PersonalInfo.scss";

const PersonalInfo = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="py-1">
        <Parallax blur={0} strength={300}>
          <Background className="w-100">
            <img src={CodeIMG} alt="code" className="w-100 custom-img" />
          </Background>
          <div>
            <h1>Personal Information</h1>
          </div>
        </Parallax>
      </Grid>

      <Grid item xs={12} className="py-1">
        <Grid container className="py-3">
          <Grid item xs={12} align-items-xs-center>
            <h2 className="pb-2">About me</h2>
          </Grid>
          <Grid item xs={12} className="py-2" align-items-xs-center>
            <PublicIcon />
            <div>
              <p className="my-0">My name is Juan Carlos González Pascolo.</p>
              <p className="my-2">
                I was born in Venezuela on 14th November 1997.
              </p>
              <p className="my-2">However, I have lived in Spain since 2004.</p>
              <p className="my-2">
                To be more concrete I have grown up in Tenerife, one of the
                Canary Islands.
              </p>
              <p className="my-2"></p>
            </div>
          </Grid>
        </Grid>

        <Grid container className="bg-broken-white py-3">
          <Grid item xs={12} align-items-xs-center>
            <h2 className="pb-2">About my personal skills</h2>
          </Grid>
          <Grid item xs={12} className="py-2" align-items-xs-center>
            <LanguageIcon />
            <div>
              I have a B2 English level certified by Oxford Test of English
              (CEFR).
            </div>
          </Grid>
          <Grid item xs={12} className="py-2" align-items-xs-center>
            <EmojiPeopleIcon />
            <div>
              <p className="my-0">
                I have good communicative skills thanks to lots of assignments
                where I had to make speaches.
              </p>
              <p className="my-2">
                In addition, I have leadership skills and I am a decision maker
                due to my seven years as football referee.
              </p>
              <p className="my-2">
                Moreover, I like teamwork and I have learnt some skills in that
                field because I have practised a some team sports such as
                football, basketball and handball.
              </p>
              <p className="my-2">
                And I would like to add that I consider myself a hard-worker
                person who is eager to learn as many areas as possible.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} className="py-2" align-items-xs-center>
            <TvIcon />
            <div>
              <p className="my-0">
                I like watching YouTube videos and tutorials about programming
                and technology.
              </p>
              <p className="my-2">
                I also love traveling around the world. In fact, I do not have
                problems about go abroad for labor reasons.
              </p>
              <p className="my-2">
                Besides, sports are another of my hobbies. I like the major part
                of them but football and basketball are my favourites.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container className="py-3">
          <Grid item xs={12} align-items-xs-center>
            <h2 className="pb-2">How to contact me</h2>
          </Grid>
          <Grid item xs={12} className="py-1" align-items-xs-center>
            <EmailIcon />
            <div>
              <p className="my-0">
                If you want to contact me via email you just need to write to{" "}
                <a className="mailTag" href="mailto:jcpascolo@gmail.com">
                  jcpascolo@gmail.com
                </a>
              </p>
              <p className="my-2">
                Or contact me via Skype on{" "}
                <span className="mailTag">jcpascolo</span>
              </p>
              <p className="my-2">
                You can also see my profile on{" "}
                <a
                  className="mailTag"
                  href="https://www.linkedin.com/in/jcgpasco/"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  className="mailTag"
                  href="https://www.infojobs.net/candidate/cv/view/index.xhtml?dgv=4254486755338217576"
                >
                  InfoJob
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
