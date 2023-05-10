import './Toolbar.css';

import attach from '../../assets/attach.svg';
import media from '../../assets/media.svg';
import formatRight from '../../assets/formatRight.svg';
import formatLeft from '../../assets/formatLeft.svg';
import formatCenter from '../../assets/formatCenter.svg';
import formatBold from '../../assets/formatBold.svg';
import formatItalic from '../../assets/formatItalic.svg';
import checklist from '../../assets/checklist.svg';
import listBulleted from '../../assets/listBulleted.svg';
import notes from '../../assets/notes.svg';

interface ToolbarItem {
  items: string[];
  alt: string[];
  imageSource: string[];
}

const toolbarItems: ToolbarItem[] = [
  {
    items: ['attach', 'media'],
    alt: ['attachment', 'media'],
    imageSource: [attach, media],
  },
  {
    items: ['formatLeft', 'formatRight', 'formatCenter'],
    alt: ['format left', 'format right', 'format center'],
    imageSource: [formatLeft, formatRight, formatCenter],
  },
  {
    items: ['formatBold', 'formatItalic'],
    alt: ['format bold', 'format italic'],
    imageSource: [formatBold, formatItalic],
  },
  {
    items: ['checklist', 'listBulleted', 'notes'],
    alt: ['checklist', 'list Bulleted', 'notes'],
    imageSource: [checklist, listBulleted, notes],
  },
];

function Toolbar() {
  return (
    <div className="toolbar">
      {toolbarItems.map((item, index) => (
        <ToolbarSection key={index} items={item.items} alt={item.alt} imageSource={item.imageSource} />
      ))}
    </div>
  );
}

function ToolbarSection({ items, alt, imageSource }: ToolbarItem) {
  return (
    <div className="layer">
      {items.map((item, index) => (
        <img key={index} src={imageSource[index]} alt={alt[index]} className="image" />
      ))}
    </div>
  );
}

export default Toolbar;
