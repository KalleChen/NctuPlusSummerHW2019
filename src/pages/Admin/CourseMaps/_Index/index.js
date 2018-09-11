
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PageWrapper from 'components/PageWrapper'
import CourseMapsTable from 'components/Admin/CourseMapsTable'
import { fetchCourseMaps } from 'redux/Actions/CourseMaps'

const mapStateToProps = (state) => ({
  courseMaps: state.courseMaps.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCourseMaps())
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <PageWrapper>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-4'>
              <h3 className=''>
                課程地圖
                <Link to='/admin/course_maps/new'>
                  <button className='btn btn-warning mx-3'>新增</button>
                </Link>
              </h3>
            </div>
            <div className='col-12 pt-3'>
              <CourseMapsTable data={this.props.courseMaps.data} />
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))