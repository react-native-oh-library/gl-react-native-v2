
cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)
set(rnoh_glRN_generated_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")

file(GLOB rnoh_glRN_SRC CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE rnoh_glRN_generated_SRC "${rnoh_glRN_generated_dir}/**/*.cpp")

add_library(rnoh_glRN SHARED ${rnoh_glRN_SRC} ${rnoh_glRN_generated_SRC})
target_include_directories(rnoh_glRN PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${rnoh_glRN_generated_dir}
    ${CMAKE_CURRENT_SOURCE_DIR}/generated/react/render/components/gl_react_native
)

target_link_libraries(rnoh_glRN PUBLIC rnoh)