import mp from '@/apis/wx';
import { View } from '@tarojs/components';
import './index.less';

const menuRect = mp.getMenuButtonBoundingClientRect();

const hdPt = Math.max(0, menuRect.top - 6);

const Header: React.FC<
  React.PropsWithChildren<{
    className?: string;
    title?: string;
    Left?: any;
  }>
> = (props) => {
  const { title, children, className, Left = null } = props;

  const content = children || title;

  return (
    <View className={`cmp-header-wrap ${className}`}>
      <View className="cmp-header-holder" style={{ paddingTop: hdPt }}></View>
      {content ? (
        <View className="row cmp-header">
          {Left}
          <View className="flex-1">{content}</View>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
