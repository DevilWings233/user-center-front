import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      copyright={'DevilWings 出品'}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'planet',
          title: '知识星球   ',
          href: 'https://www.zsxq.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> GitHub   </>,
          href: 'https://github.com/DevilWings233',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
