import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, footer, rotate }) {
  const buttonClicked = () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <Card>
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <div className="flex flex-row items-center justify-between">
          <div className="ml-16">
            {title == "API KEY" && (
              <>
                <IconButton variant="text" onClick={buttonClicked}>
                  <i className="fa-solid fa-clipboard" />
                </IconButton>
                <IconButton variant="text" onClick={rotate}>
                  <i className="fa-solid fa-refresh" />
                </IconButton>
              </>
            )}
          </div>
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
            {title}
          </Typography>{" "}
        </div>
        <div className="overflow-x-auto">
          <Typography variant="h6" color="blue-gray">
            {value}
          </Typography>
        </div>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
  rotate: PropTypes.func,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
