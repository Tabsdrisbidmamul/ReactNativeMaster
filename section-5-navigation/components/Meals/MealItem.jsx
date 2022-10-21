import { Dimensions, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colours } from '../../constants/colours';

export default function MealItems({ title, uri, duration, complexity, affordability }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable style={styles.pressableContainer}>
        <View style={styles.figureContainer}>
          <ImageBackground resizeMode="cover" source={{ uri: uri }} style={styles.image}>
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,1)']}
              style={{ height: '100%', width: '100%' }}
              locations={[0.6, 1]}
            />
          </ImageBackground>

          <Text style={styles.title}>{title}</Text>
          <View style={styles.outerTextContainer}>
            <Text style={[styles.subtext, styles.timeText]}>{duration}m</Text>
            <Text style={styles.subtext}>{complexity}</Text>
            <Text style={styles.subtext}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  outerContainer: {
    // padding: 10,
    // elevation: 10,
    // backgroundColor: colours.whiteTransparent,
    // borderRadius: 8,
    flex: 1,
    marginBottom: 12,
  },
  pressableContainer: {
    // position: 'relative',
    // flex: 1,
    // borderRadius: 8,
    // overflow: 'hidden',
    shadowColor: colours.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  figureContainer: {
    position: 'relative',
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 10,

    // top: -1,
    // left: -1,
    // padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
    // borderRadius: 8,
    top: 0,
    left: 0,
  },
  title: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: deviceWidth < 400 ? 16 : 18,
    marginTop: 12,
    position: 'absolute',
    bottom: 30,
    right: 15,
    color: colours.whiteTransparent,
  },
  outerTextContainer: {
    // paddingHorizontal: 10,
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    position: 'absolute',
    bottom: 10,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '5',
  },
  subtext: {
    color: colours.whiteTransparent,
    marginLeft: 10,
    fontFamily: 'roboto-bold',
    fontSize: deviceWidth < 400 ? 12 : 13,
    textTransform: 'uppercase',
    // letterSpacing: 0.5,
  },
  timeText: {
    textTransform: 'none',
  },
});
