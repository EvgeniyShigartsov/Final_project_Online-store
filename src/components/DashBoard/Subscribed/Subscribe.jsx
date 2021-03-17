import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { getSubscriber } from '../../../store/createSubscribe/middleware';
import { BlockInfo, TextInfo } from '../StyledDashBoard';
import SubscribedUser from './SubscribedUser';
import NotSubscribedUser from './NotSubscribedUser';

const Subscribe = ({email}) => {
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

  return (
    <BlockInfo>
      <h4>Newsletters</h4>
      <div>
        <TextInfo>
          {isSubscribed ? <SubscribedUser /> : (
            <NotSubscribedUser
              email={email}
              setIsSubscribed={setIsSubscribed}
            />
          )}
        </TextInfo>
      </div>
    </BlockInfo>
    
  );
}
Subscribe.propTypes = {
  email: PropTypes.string.isRequired
}
export default Subscribe;