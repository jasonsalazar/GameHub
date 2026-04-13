import platforms from "../data/platforms";

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null }); //useData<Platform>("/platforms/lists/parents")

export default usePlatforms;
