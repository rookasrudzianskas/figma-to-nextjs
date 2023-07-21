// @ts-nocheck
import type { NextPage } from "next";
import ProjectCard from "./project-card";
import {createClient} from "@supabase/supabase-js";
import {useEffect, useState} from "react";

const PropertiesGridContainer: NextPage = () => {

  const client = createClient(
    process.env.NEXT_PUBLIC_KEY,
    process.env.NEXT_PUBLIC_KEY
  );

  const [properties, setProperties] = useState([]) as any[];

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from("properties").select("*");
      setProperties(result.data);
    }
    fetchProperties();
  }, [])

  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        {properties.map((property, i) => (
          <ProjectCard
            key={i}
            imgUrl={property.image}
            name={property.name}
            price={property.price}
            propertyImage="/unsplashrlwe8f8anoc@2x.png"
            car="/car.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork.svg"
            heart="/heart.svg"
            plus="/plus.svg"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
