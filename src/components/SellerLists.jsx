import React from "react";
import { Avatar, Button, Flex, Tooltip, Typography, Card, Divider } from "antd";

const SellerLists = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            {" "}
            View All
          </Button>
        </Flex>
        <Card align="center" justify="space-evenly">
          <Flex>
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg" />
              </Tooltip>
              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-p-follow-link-alt-click-with-short-hair-smiling-white-teeth-looking-happy-playing-with-haircut-standing-against-white-wall_176420-34431.jpg" />
              </Tooltip>
              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/premium-psd/adult-man-natural-confident-portrait-concept_53876-22253.jpg" />
              </Tooltip>
              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>
              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,200 plant sold
              </Typography.Text>

              <Typography.Text type="secondary" strong>
                10 sellers
              </Typography.Text>

            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card align="center" justify="space-evenly">
          <Flex>
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>

              <Tooltip title="User 3" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg" />
              </Tooltip>
              <Tooltip title="User 4" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/close-up-p-follow-link-alt-click-with-short-hair-smiling-white-teeth-looking-happy-playing-with-haircut-standing-against-white-wall_176420-34431.jpg" />
              </Tooltip>
              <Tooltip title="User 5" placement="top">
                <Avatar src="https://img.freepik.com/premium-psd/adult-man-natural-confident-portrait-concept_53876-22253.jpg" />
              </Tooltip>
              <Tooltip title="User 6" placement="top">
                <Avatar src="https://img.freepik.com/premium-photo/close-up-happy-young-woman-winking-camera-smiling-joyful-standing-white-wall_176420-37520.jpg" />
              </Tooltip>
              <Tooltip title="User 7" placement="top">
                <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-man-grey-shirt-smiling-camera-dark-wall_176420-3421.jpg" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1504 plant sold
              </Typography.Text>

              <Typography.Text type="secondary" strong>
                13 sellers
              </Typography.Text>

            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
export default SellerLists;
