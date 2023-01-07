// @ts-ignore
const amplitude = window.amplitude;

const viewSlide = (id: string) => {
  amplitude.track(`${id} Slide Viewed`);
}

const analytics = {
  viewSlide,
};

export default analytics;
