import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NAME_LOGO } from "../../Assets/Constant/Common/constCommon";
import IconStar from "../../Components/Common/Icons/IconStar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const BookTickets = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          background: "white",
          position: "relative",
          padding: "0 150px",
        }}
        component="nav"
      >
        <Toolbar>
          <Typography variant="h3" className="logo" component="h4">
            {NAME_LOGO}
          </Typography>
          <div>tes</div>
        </Toolbar>
      </AppBar>
      <div
        style={{
          width: "100%",
          position: "relative",
          background:
            "url(https://i.ytimg.com/vi/_Z4tHzutmPE/sddefault.jpg) no-repeat center ",
          height: "550px",
          backgroundSize: "cover",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "rgb(0 0 0 / 84%)",
            position: "absolute",
          }}
        ></div>
        <Stack
          direction={"row"}
          gap={"40px"}
          style={{
            margin: "0 auto",
            position: "relative",
            zIndex: "2",
            width: "80%",
            height: "100%",
          }}
        >
          <div style={{ width: "400px" }}>
            <img
              alt=""
              loading="lazy"
              src="https://static.kinhtedothi.vn/w960/images/upload/2022/10/13/850c8763-4011-4702-afd7-6ced0bf05caf.jpg"
            ></img>
          </div>
          <Stack
            direction={"column"}
            flex={1}
            padding={"20px 0"}
            color={"white"}
          >
            <Chip
              color="primary"
              style={{
                fontWeight: "700",
                width: "max-content",
                borderRadius: "10px",
              }}
              label="K"
            />
            <Typography variant="h3" marginTop={"20px"}>
              Hanh trinh cong ly
            </Typography>
            <Stack>
              <Typography color={"gray"}>
                song of the south - 2023 - 110 phút
              </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
              <span style={{ color: "yellow", width: "40px" }}>
                <IconStar />
              </span>
              <Typography style={{ fontWeight: "700" }} variant="h4">
                8.3
              </Typography>
              <Stack>
                <Typography fontSize={"12px"} color={"gray"} variant="body2">
                  1.4k
                </Typography>
                <Typography fontSize={"12px"} color={"gray"} variant="body2">
                  Đánh giá
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant="body1"
              fontStyle={"italic"}
              color={"gray"}
              margin={"20px 0"}
            >
              Dựa theo tiểu thuyết cùng tên của nhà văn Đoàn Hải
            </Typography>
            <Stack gap={"20px"}>
              <Typography variant="h3">Nội dung</Typography>
              <Typography variant="body1" color={"gray"}>
                Đất rừng phương Nam (tựa tiếng Anh: Song of the South) là một bộ
                phim điện ảnh Việt Nam thuộc thể loại sử thi – tâm lý – chính
                kịch ra mắt vào năm 2023, được dựa trên cuốn tiểu thuyết cùng
                tên của nhà văn Đoàn Giỏi... Xem Theem
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={"20px"} marginTop={"30px"}>
              <Stack>
                <Typography color="gray">Ngày chiếu</Typography>
                <Typography fontWeight={"700"}>20/10/2023</Typography>
              </Stack>
              <Stack>
                <Typography color="gray">Thể loại</Typography>
                <Typography fontWeight={"700"}>
                  Chiến trang, kịch tính, gia đình
                </Typography>
              </Stack>
              <Stack>
                <Typography color="gray">Quốc Gia</Typography>
                <Typography fontWeight={"700"}>Viet Nam</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Grid
          style={{
            margin: "40px auto",
            position: "relative",
            zIndex: "2",
            width: "80%",
            height: "100%",
          }}
          container
          spacing={2}
        >
          <Grid item xs={8}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h4">Show schedule</Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                alignSelf={"center"}
              >
                <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
                  {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={
                      <span>
                        <LocationOnIcon />
                        {age}
                      </span>
                    }
                    defaultValue={10}
                    // label="Thanh Pho"
                    onChange={handleChange}
                    // IconComponent={<LocationOnIcon />}
                  >
                    <MenuItem value={10}>Thanh pho HCM</MenuItem>
                    <MenuItem value={20}>THanh pho HN</MenuItem>
                    <MenuItem value={30}>Thanh Pho hai phong</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  startIcon={<MyLocationIcon />}
                  size="medium"
                  variant="outlined"
                  style={{ height: "max-content", padding: "15px 20px" }}
                >
                  Gần bạn
                </Button>
              </Stack>
            </Stack>
            <Stack></Stack>
            <Stack>
              <Typography variant="h4">Choose time</Typography>
              <Stack
                direction={"row"}
                useFlexGap
                flexWrap="wrap"
                gap={"15px"}
                alignItems={"center"}
              >
                {Array(20)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <Button
                        onClick={handleOpen}
                        key={index}
                        size="large"
                        variant="outlined"
                        style={{ height: "max-content" }}
                      >
                        17:30 ~ 19:30
                      </Button>
                    );
                  })}
              </Stack>{" "}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style, width: 200 }}>
                  <h2 id="child-modal-title">Text in a child modal</h2>
                  <p id="child-modal-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
              </Modal>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Typography component={"div"} variant="h3">
              Events
            </Typography>

            <Stack
              direction={"column"}
              gap={"20px"}
              style={{ marginTop: "30px" }}
            >
              {Array(10)
                .fill(0)
                .map((_, index) => {
                  return (
                    <Card key={index} sx={{ display: "flex", gap: "20px" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 140, borderRadius: "10px" }}
                        image="https://cdn.nbtv.vn/upload/news/8_2022/2_13463624082022.jpg"
                        alt="Live from space album cover"
                      />
                      <Stack direction={"column"}>
                        <CardContent
                          sx={{ flex: "1 0 auto" }}
                          style={{ padding: 0 }}
                        >
                          <Chip
                            label="18+"
                            style={{
                              borderRadius: "4px",
                              background: "red",
                              fontWeight: "bold",
                              color: "white",
                              fontSize: "12px",
                              padding: "5px 0",
                            }}
                          />{" "}
                          <Typography component="div" variant="h5">
                            Thanh Pho ngu gat
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="gray"
                            component="div"
                          >
                            Hình sự chính kịch
                          </Typography>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"5px"}
                          >
                            <span
                              style={{
                                color: "yellow",
                                width: "20px",
                                display: "flex",
                              }}
                            >
                              <IconStar />
                            </span>
                            <Typography variant="body2" color={"gray"}>
                              8.3
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Card>
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default BookTickets;
