import React from "react";
import Layout from "../components/Layout";
import { SongData } from "../context/Song";
import AlbumItem from "../components/AlbumItem";
import SongItem from "../components/SongItem";

const Home = () => {
  const { songs, albums, loading, error } = SongData();

  if (loading) {
    return (
      <Layout>
        <p className="text-center text-gray-500">Loading...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p className="text-center text-red-500">Failed to load data. Please try again later.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Featured Charts Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        {albums?.length > 0 ? (
          <div className="flex overflow-auto gap-x-4">
            {albums.map((e) => (
              <AlbumItem
                key={e._id}
                image={e.thumbnail?.url || "/placeholder-album.png"}
                name={e.title}
                desc={e.description}
                id={e._id}
                alt={`Album cover for ${e.title}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No albums available</p>
        )}
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        {songs?.length > 0 ? (
          <div className="flex overflow-auto gap-x-4">
            {songs.map((e) => (
              <SongItem
                key={e._id}
                image={e.thumbnail?.url || "/placeholder-song.png"}
                name={e.title}
                desc={e.description}
                id={e._id}
                alt={`Song cover for ${e.title}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No songs available</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
