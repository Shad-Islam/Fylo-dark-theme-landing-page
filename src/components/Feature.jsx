import React from "react";
import {
  FeaturesRow,
  FeaturesItem,
  FeaturesItemIcon,
  FeaturesItemText,
  FeaturesItemImage,
  FeaturesContainer,
  FeaturesItemTitle,
} from "./styles/feature.style";

import iconAnyFile from "../images/icon-any-file.svg";
import iconSecurity from "../images/icon-security.svg";
import iconCollaboration from "../images/icon-collaboration.svg";
import iconAccessAnywhere from "../images/icon-access-anywhere.svg";

function Feature() {
  return (
    <>
      <FeaturesContainer>
        <FeaturesRow>
          {/* item 1 */}
          <FeaturesItem>
            <FeaturesItemIcon>
              <FeaturesItemImage src={iconAccessAnywhere} />
            </FeaturesItemIcon>

            <FeaturesItemTitle>Access your files, anywhere</FeaturesItemTitle>
            <FeaturesItemText>
              The ability to use a smartphone, tablet, or computer
              <br />
              to access your account means your files follow you
              <br />
              everywhere.
            </FeaturesItemText>
          </FeaturesItem>
          {/* item 2 */}
          <FeaturesItem>
            <FeaturesItemIcon>
              <FeaturesItemImage src={iconSecurity} />
            </FeaturesItemIcon>
            <FeaturesItemTitle> Security you can trust </FeaturesItemTitle>
            <FeaturesItemText>
              2-factor authentication and user-controlled encryption are
              <br />
              just a couple of the security features we allow to help
              <br />
              secure your files.
            </FeaturesItemText>
          </FeaturesItem>
        </FeaturesRow>

        <FeaturesRow>
          {/* item 3  */}
          <FeaturesItem>
            <FeaturesItemImage src={iconCollaboration} />
            <FeaturesItemTitle>Real-time collaboration</FeaturesItemTitle>
            <FeaturesItemText>
              Securely share files and folders with friends, family and
              <br />
              colleagues for live collaboration. No email attachments
              <br />
              required.
            </FeaturesItemText>
          </FeaturesItem>
          {/* item 4 */}
          <FeaturesItem>
            <FeaturesItemImage src={iconAnyFile} />
            <FeaturesItemTitle>Store any type of file</FeaturesItemTitle>
            <FeaturesItemText>
              Whether you're sharing holidays photos or work
              <br />
              documents, Fylo has you covered allowing for all file
              <br />
              types to be securely stored and shared.
            </FeaturesItemText>
          </FeaturesItem>
        </FeaturesRow>
      </FeaturesContainer>
    </>
  );
}

export default Feature;
