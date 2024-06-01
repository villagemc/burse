import ChestImage from "@/images/refer/chest.png";
import MarkImage from "@/images/refer/mark.png";
import FriendImage from "@/images/refer/friend.png";
import FriendIcon from "@/images/refer/friend.svg?react";
import CopyIcon from "@/images/refer/copy.svg?react";
import ReferItem from "./ReferItem";

export type TReferItem = {
  image: string;
  title: string;
  subtitle: string;
}

const referItems: TReferItem[] = [
  {
    image: ChestImage,
    title: 'To invite a friend',
    subtitle: '+1000000 Slopy'
  },
  {
    image: MarkImage,
    title: 'Invite a friend with Premium',
    subtitle: '+1000000 Slopy'
  }
];

const referListItems: TReferItem[] = [
  {
    image: FriendImage,
    title: 'Your Friend',
    subtitle: '+1000000 Slopy'
  }
];

export default function Refer() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('copy text');

      if (!('Notification' in window)) return;

      Notification.requestPermission(function (permission) {
        if (permission === 'granted') {
          const notification = new Notification('Successfully copied!');
  
          setTimeout(() => notification.close(), 2000);
        }
      }); 
    } catch (error) {
      console.log('Copy error!');
    }
  }

  return (
    <section className="refer">
      <ul className="items">
        {referItems.map((item, id) =>
          <ReferItem key={id} item={item} />
        )}
      </ul>
      <p className="name">List of invited friends</p>
      <ul className="items">
        {referListItems.map((item, id) =>
          <ReferItem key={id} item={item} />
        )}
      </ul>
      <ul>
        {new Array(3).fill(0).map((_, id) => 
          <li className="ellipse" key={id} />
        )}
      </ul>
      <div className="info">
        <button className="button" type="button">
          <FriendIcon className="friend-icon" />
          <span className="invite">Invite a Friend</span>
        </button>
        <button onClick={handleCopy} className="button" type="button">
          <CopyIcon className="copy-icon" />
        </button>
      </div>
    </section>
  )
}