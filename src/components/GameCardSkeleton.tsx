import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card marginBottom={5}>
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
      <Card marginBottom={5}>
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
      <Card>
        <Skeleton height="250px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
