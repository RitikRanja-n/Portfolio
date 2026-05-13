import React from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud';
import { skillToSlug } from '../constants/skills';

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<any>(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon: icon as SimpleIcon,
        size: 42,
        aProps: {
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }

  return null;
};

// Only use slugs for skills that are explicitly defined in our skills data
const slugs = Object.values(skillToSlug);

const IconCloudComponent: React.FC = () => {
  const icons = useIcons(slugs);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[300px] md:min-h-[500px]">
      {icons ? (
        <Cloud
          containerProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              paddingTop: 20,
            },
          }}
          options={{
            reverse: true,
            depth: 1,
            wheelZoom: false,
            imageScale: 2,
            activeCursor: 'default',
            tooltip: 'native',
            initial: [0.1, -0.1],
            clickToFront: 500,
            tooltipDelay: 0,
            outlineColour: '#0000',
            maxSpeed: 0.04,
            minSpeed: 0.02,
          }}
        >
          {icons}
        </Cloud>
      ) : (
        <div className="text-gray-400">Loading icons...</div>
      )}
    </div>
  );
};

export default IconCloudComponent;

