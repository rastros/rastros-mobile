import React from 'react';
import {
	View,
	Image,
	Text,
	TouchableNativeFeedback,
	StyleSheet,
} from 'react-native';
import { palette } from '../theme/colors';
import type { SummaryItem } from '../types/types';

type Prop = { item: SummaryItem; action: () => void };

// TODO: Make this responsive to each and every collection, not just animals
// FIXME: Create a wrapper component for touchables to work on IOS
export default ({ item, action }: Prop) => (
	<TouchableNativeFeedback onPress={action}>
		<View style={styles.indexItem}>
			<Image source={decideAsset(item.asset)} style={styles.icon} />
			<View>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
					{item.name}
				</Text>
				<Text style={{ fontSize: 13, color: '#333' }}>{item.sub}</Text>
			</View>
		</View>
	</TouchableNativeFeedback>
);

const decideAsset = (s: string) => {
	let imageSource;
	if (s == 'Mamífero') imageSource = require('../../assets/mammal.png');
	else if (s == 'Réptil') imageSource = require('../../assets/reptile.png');
	else if (s == 'Ave') imageSource = require('../../assets/bird.png');
	return imageSource;
};

const styles = StyleSheet.create({
	icon: {
		height: 36,
		width: undefined,
		aspectRatio: 1,
		borderRadius: 18,
		marginRight: 15,
		marginLeft: 5,
		resizeMode: 'contain',
	},
	indexItem: {
		padding: 12.5,
		backgroundColor: palette.sand,
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderRadius: 15,
		shadowColor: 'black',
		elevation: 3,
		marginBottom: 12,
		width: '85%',
		alignSelf: 'center',
		flexDirection: 'row',
	},
});
