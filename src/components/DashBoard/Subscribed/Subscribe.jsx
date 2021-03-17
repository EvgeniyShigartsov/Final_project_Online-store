/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import createNewSubscribe, { getSubscriber } from '../../../store/createSubscribe/middleware';
import { BlockInfo, TextInfo } from '../StyledDashBoard';
import { letterHtml, letterSubject } from '../../Footer/footer-components/footer-config/letterConfig';

const Subscribe = connect(null, {createNewSubscribe})(({email, createNewSubscribe}) => {
  const [isSubscribed, setIsSubscribed] = useState(false) // email false

  useEffect(() => {
    const getSubscriberInfo = async () => {
      if (email) {
        const checkSubscription = await getSubscriber(email);
        if (checkSubscription.status === 200) {
          setIsSubscribed(() => true)
        }
      }
    }
    getSubscriberInfo()
  }, [email])

  const addSubscriber = async (email, letterSubject, letterHtml) => {
    const result = await createNewSubscribe({email, letterSubject, letterHtml})
    if (!result && result.status !== 200) return
    setIsSubscribed(() => true)
  }

  const Subscribed = 'You have been subscribed to newsupdates';
  const NotSubscribed = "You don't subscribe to our newsletter";

  return (
    <BlockInfo>
      <h4>Newsletters</h4>
      <div>
        <TextInfo>
          <p>
            {isSubscribed ? Subscribed : NotSubscribed}
          </p>
          <button type="button" onClick={() => addSubscriber(email, letterSubject, letterHtml)}>Submit</button>
        </TextInfo>
      </div>
    </BlockInfo>
    
  );
})
export default Subscribe;