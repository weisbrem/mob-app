import { View } from 'react-native';
import CustomLink from '../shared/CustomLink/CustomLink';
import { AppRoutes } from '../shared/common.types';

export default function Restore() {
  return (
    <View>
      <CustomLink href={AppRoutes.root} text='Restore' />
    </View>
  );
}
